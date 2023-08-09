using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Traveller_Agents.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Packages",
                columns: table => new
                {
                    package_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "101, 1"),
                    tour_id = table.Column<int>(type: "int", nullable: false),
                    traveller_id = table.Column<int>(type: "int", nullable: false),
                    package_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    food_plan = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    hotel_nearby = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    spots_nearby = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    itinerary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tour_image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    price = table.Column<int>(type: "int", nullable: false),
                    vacation_type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    duration = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Packages", x => x.package_id);
                });

            migrationBuilder.CreateTable(
                name: "Spots",
                columns: table => new
                {
                    SpotId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "201, 1"),
                    Image1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourPackagepackage_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Spots", x => x.SpotId);
                    table.ForeignKey(
                        name: "FK_Spots_Packages_TourPackagepackage_id",
                        column: x => x.TourPackagepackage_id,
                        principalTable: "Packages",
                        principalColumn: "package_id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Spots_TourPackagepackage_id",
                table: "Spots",
                column: "TourPackagepackage_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Spots");

            migrationBuilder.DropTable(
                name: "Packages");
        }
    }
}
