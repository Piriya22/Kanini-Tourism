using BigBang_3.Context;
using BigBang_3.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BigBang_3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
       
            public IConfiguration _configuration;
            private readonly AdminContext _context;

            private const string AdminRole = "Admin";
            public TokenController(IConfiguration config, AdminContext context)
            {
                _configuration = config;
                _context = context;
            }
            [HttpPost("Admin")]
            public async Task<IActionResult> PostStaff(Admin staffData)
            {
                if (staffData != null && !string.IsNullOrEmpty(staffData.admin_name) && !string.IsNullOrEmpty(staffData.admin_password))
                {
                    if (staffData.admin_name == "Piriya" && staffData.admin_password == "Piriya123")
                    {
                        var claims = new[]
                        {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("admin_id", "1"),
                new Claim("admin_name", staffData.admin_name),
                new Claim("admin_password", staffData.admin_password),
                new Claim(ClaimTypes.Role, AdminRole)
            };

                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret"]));
                        var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                        var token = new JwtSecurityToken(
                            _configuration["Jwt:ValidIssuer"],
                            _configuration["Jwt:ValidAudience"],
                            claims,
                            expires: DateTime.UtcNow.AddDays(1),
                            signingCredentials: signIn);

                        return Ok(new JwtSecurityTokenHandler().WriteToken(token));
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


            private async Task<Admin> GetStaff(string adminName, string adminPassword)
            {
                return await _context.admin.FirstOrDefaultAsync(s => s.admin_name == adminName && s.admin_password == adminPassword);
            }

        }

    }

