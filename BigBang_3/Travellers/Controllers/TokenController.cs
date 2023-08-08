using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Travellers.Models;
using Travellers.Models.DTO;

namespace Travellers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly TravellerContext _context;
        private const string TravellerRole = "Traveller";
        public TokenController(IConfiguration configuration, TravellerContext context)
        {
            _configuration = configuration;
            _context = context;
        }
        [HttpPost("Travellerlogin")]
        public async Task<IActionResult> Post(Traveller _userData)
        {
            if (_userData != null && _userData.traveller_name != null && _userData.traveller_password != null)
            {
                var user = await GetUser(_userData.traveller_name, _userData.traveller_password);

                if (user != null)
                {
                    var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("traveller_id", user.traveller_id.ToString()),
                        new Claim("traveller_name", user.traveller_name),
                        new Claim("traveller_password", user.traveller_password),
                        new Claim(ClaimTypes.Role, TravellerRole)

                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:ValidIssuer"],
                        _configuration["Jwt:ValidAudience"],
                        claims,
                        expires: DateTime.UtcNow.AddDays(1),
                        signingCredentials: signIn);

                    var response = new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        id = user.traveller_id
                    };

                    return Ok(response);
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }

        }
        private async Task<Traveller> GetUser(string name, string password)
        {
            return await _context.traveller.FirstOrDefaultAsync(x => x.traveller_name == name && x.traveller_password == password);

        }

    }
}
