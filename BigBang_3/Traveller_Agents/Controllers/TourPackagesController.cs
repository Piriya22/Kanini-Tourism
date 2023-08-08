using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static Traveller_Agents.Interface.ITourPackages;
using Traveller_Agents.Models;
using Traveller_Agents.Interface;
using Traveller_Agents.Service;

namespace Traveller_Agents.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourPackagesController : ControllerBase
    {
        private readonly ITourPackages _packageService;

        public TourPackagesController (ITourPackages packageService)
        {
            _packageService = packageService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TourPackages>> GetPackages()
        {
            try
            {
                var packages = _packageService.GetPackages();
                return Ok(packages);
            }
            catch (Exception )
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error while retrieving packages.");
            }
        }

        
        [HttpPost]
        public async Task<ActionResult<TourPackages>> PostPackage([FromForm] TourPackages tour, IFormFile imageFile)
        {
            try
            {
                var result = await _packageService.PostPackage(tour, imageFile);
                return CreatedAtAction(nameof(GetPackages), result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error while processing the request.");
            }
        }

        [HttpGet("TourId/{id}")]
        public async Task<ActionResult<ICollection<TourPackages>>> GetTourPackageByTourId(int id)
        {
            try
            {
                var tourPackage = await _packageService.GetTourPackageByTourId(id);

                if (tourPackage == null)
                {
                    return NotFound();
                }
                return Ok(tourPackage);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TourPackages>> GetPackageById(int id)
        {
            try
            {
                var tourpackage = await _packageService.GetTourpackageByid(id);
                if (tourpackage == null)
                {
                    return NotFound();
                }
                return Ok(tourpackage);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
