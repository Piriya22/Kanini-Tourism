using Xunit;
using Moq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Travellers.Controllers;
using Travellers.Models;
using System.Threading.Tasks;

namespace Travellers.Tests
{
    public class TravellerControllerTests
    {
        [Fact]
        public async Task GetTravellers_ReturnsOkResult()
        {
            // Arrange
            var mockService = new Mock<ITravellerService>();
            mockService.Setup(service => service.GetAllTravellers())
                .ReturnsAsync(new List<Traveller>());

            var controller = new TravellerController(mockService.Object);

            // Act
            var result = await controller.GetTravellers();

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async Task GetTraveller_WithExistingId_ReturnsOkResult()
        {
            // Arrange
            var mockService = new Mock<ITravellerService>();
            int existingId = 1;
            mockService.Setup(service => service.GetTravellerById(existingId))
                .ReturnsAsync(new Traveller { traveller_id = existingId });

            var controller = new TravellerController(mockService.Object);

            // Act
            var result = await controller.GetTraveller(existingId);

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }

    }
}
