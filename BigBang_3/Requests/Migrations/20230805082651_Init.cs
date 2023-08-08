using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Requests.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    admin_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    admin_name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    admin_password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.admin_id);
                });

            migrationBuilder.CreateTable(
                name: "ImageGallery",
                columns: table => new
                {
                    tour_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "5111, 1"),
                    tour_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    location_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageGallery", x => x.tour_id);
                });

            migrationBuilder.CreateTable(
                name: "TravelAgents",
                columns: table => new
                {
                    agent_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "4111, 1"),
                    agent_name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    agent_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    agent_email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    agent_password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    agent_phonenumber = table.Column<long>(type: "bigint", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TravelAgents", x => x.agent_id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "ImageGallery");

            migrationBuilder.DropTable(
                name: "TravelAgents");
        }
    }
}
