﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Requests.Context;
using Requests.Models;

namespace Requests.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageGalleryController : ControllerBase
    {
        private readonly AdminContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ImageGalleryController(AdminContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        // GET: api/ImageGallery
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImageGallery>>> GetImageGallery()
        {
            if (_context.ImageGallery == null)
            {
                return NotFound();
            }
            return await _context.ImageGallery.ToListAsync();
        }

        // GET: api/ImageGallery/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ImageGallery>> GetImageGallery(int id)
        {
            if (_context.ImageGallery == null)
            {
                return NotFound();
            }
            var imageGallery = await _context.ImageGallery.FindAsync(id);

            if (imageGallery == null)
            {
                return NotFound();
            }

            return imageGallery;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ImageGallery>> UpdateImageGallery(int id, [FromForm] ImageGallery imageGallery, IFormFile imageFile)
        {
            try
            {
                var existingImageGallery = await _context.ImageGallery.FindAsync(id);
                if (existingImageGallery == null)
                {
                    return NotFound();
                }

                // If a new image file is provided, update it
                if (imageFile != null && imageFile.Length > 0)
                {
                    var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "uploads");
                    var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                    var filePath = Path.Combine(uploadsFolder, fileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await imageFile.CopyToAsync(stream);
                    }

                    // Delete the old image file
                    if (!string.IsNullOrEmpty(existingImageGallery.location_image))
                    {
                        var oldFilePath = Path.Combine(uploadsFolder, existingImageGallery.location_image);
                        if (System.IO.File.Exists(oldFilePath))
                        {
                            System.IO.File.Delete(oldFilePath);
                        }
                    }

                    // Update the image gallery object with the new file name
                    existingImageGallery.location_image = fileName;
                }

                // Update other properties of the image gallery as needed
                existingImageGallery.tour_name = imageGallery.tour_name;
                existingImageGallery.description = imageGallery.description;


                // Save changes to the database
                await _context.SaveChangesAsync();

                // Return the updated image gallery
                return Ok(existingImageGallery);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ImageGallery>> PostImageGallery([FromForm] ImageGallery imageGallery, IFormFile imageFile)
        {
            try
            {
                if (imageFile == null || imageFile.Length == 0)
                {
                    return BadRequest("Invalid file");
                }

                // Save the image to the uploads folder
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Uploads");
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                var filePath = Path.Combine(uploadsFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(stream);
                }

                // Update the ImageGallery object with the file name
                imageGallery.location_image = fileName;

                // Add the ImageGallery to the database
                _context.ImageGallery.Add(imageGallery);
                await _context.SaveChangesAsync();

                // Return the created ImageGallery with the new TourId
                return CreatedAtAction("GetImageGallery", new { id = imageGallery.tour_id }, imageGallery);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/ImageGallery/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImageGallery(int id)
        {
            if (_context.ImageGallery == null)
            {
                return NotFound();
            }
            var imageGallery = await _context.ImageGallery.FindAsync(id);
            if (imageGallery == null)
            {
                return NotFound();
            }

            _context.ImageGallery.Remove(imageGallery);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ImageGalleryExists(int id)
        {
            return (_context.ImageGallery?.Any(e => e.tour_id == id)).GetValueOrDefault();
        }
    }
}
