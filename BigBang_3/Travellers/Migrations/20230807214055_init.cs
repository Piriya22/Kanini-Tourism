using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Travellers.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "traveller",
                columns: table => new
                {
                    traveller_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "101, 1"),
                    traveller_name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    traveller_email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    traveller_password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    phone_number = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_traveller", x => x.traveller_id);
                });

            migrationBuilder.CreateTable(
                name: "bookings",
                columns: table => new
                {
                    booking_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "201, 1"),
                    traveller_id = table.Column<int>(type: "int", nullable: false),
                    package_id = table.Column<int>(type: "int", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    phone_number = table.Column<long>(type: "bigint", nullable: false),
                    residence = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    traveller_count = table.Column<int>(type: "int", nullable: false),
                    vacation_type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsConfirmed = table.Column<int>(type: "int", nullable: false),
                    BookingDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bookings", x => x.booking_id);
                    table.ForeignKey(
                        name: "FK_bookings_traveller_traveller_id",
                        column: x => x.traveller_id,
                        principalTable: "traveller",
                        principalColumn: "traveller_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "feedback",
                columns: table => new
                {
                    feedback_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "301, 1"),
                    traveller_id = table.Column<int>(type: "int", nullable: false),
                    package_id = table.Column<int>(type: "int", nullable: false),
                    rating = table.Column<int>(type: "int", nullable: false),
                    comments = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_feedback", x => x.feedback_id);
                    table.ForeignKey(
                        name: "FK_feedback_traveller_traveller_id",
                        column: x => x.traveller_id,
                        principalTable: "traveller",
                        principalColumn: "traveller_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "payments",
                columns: table => new
                {
                    payment_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "401, 1"),
                    booking_id = table.Column<int>(type: "int", nullable: false),
                    traveller_id = table.Column<int>(type: "int", nullable: true),
                    traveller_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    card_number = table.Column<int>(type: "int", nullable: false),
                    month = table.Column<int>(type: "int", nullable: false),
                    year = table.Column<int>(type: "int", nullable: false),
                    cvv_number = table.Column<int>(type: "int", nullable: false),
                    price = table.Column<int>(type: "int", nullable: false),
                    Bookingsbooking_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payments", x => x.payment_id);
                    table.ForeignKey(
                        name: "FK_payments_bookings_Bookingsbooking_id",
                        column: x => x.Bookingsbooking_id,
                        principalTable: "bookings",
                        principalColumn: "booking_id");
                    table.ForeignKey(
                        name: "FK_payments_traveller_traveller_id",
                        column: x => x.traveller_id,
                        principalTable: "traveller",
                        principalColumn: "traveller_id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_bookings_traveller_id",
                table: "bookings",
                column: "traveller_id");

            migrationBuilder.CreateIndex(
                name: "IX_feedback_traveller_id",
                table: "feedback",
                column: "traveller_id");

            migrationBuilder.CreateIndex(
                name: "IX_payments_Bookingsbooking_id",
                table: "payments",
                column: "Bookingsbooking_id");

            migrationBuilder.CreateIndex(
                name: "IX_payments_traveller_id",
                table: "payments",
                column: "traveller_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "feedback");

            migrationBuilder.DropTable(
                name: "payments");

            migrationBuilder.DropTable(
                name: "bookings");

            migrationBuilder.DropTable(
                name: "traveller");
        }
    }
}
