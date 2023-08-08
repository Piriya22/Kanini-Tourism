﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Traveller_Agents.Context;

#nullable disable

namespace Traveller_Agents.Migrations
{
    [DbContext(typeof(AgentsContext))]
    partial class AgentsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Traveller_Agents.Models.Agent", b =>
                {
                    b.Property<int>("agent_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("agent_id"));

                    b.Property<string>("agent_image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("agent_name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("agent_password")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("agent_id");

                    b.ToTable("Agents");
                });

            modelBuilder.Entity("Traveller_Agents.Models.Spot", b =>
                {
                    b.Property<int>("SpotId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SpotId"));

                    b.Property<string>("Image1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image3")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image4")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image5")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TourPackagepackage_id")
                        .HasColumnType("int");

                    b.HasKey("SpotId");

                    b.HasIndex("TourPackagepackage_id");

                    b.ToTable("Spots");
                });

            modelBuilder.Entity("Traveller_Agents.Models.TourPackages", b =>
                {
                    b.Property<int>("package_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("package_id"));

                    b.Property<string>("duration")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("food_plan")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("hotel_nearby")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("itinerary")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("package_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("price")
                        .HasColumnType("int");

                    b.Property<string>("spots_nearby")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("tour_id")
                        .HasColumnType("int");

                    b.Property<string>("tour_image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("traveller_id")
                        .HasColumnType("int");

                    b.Property<string>("vacation_type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("package_id");

                    b.ToTable("Packages");
                });

            modelBuilder.Entity("Traveller_Agents.Models.Spot", b =>
                {
                    b.HasOne("Traveller_Agents.Models.TourPackages", "TourPackage")
                        .WithMany("spot")
                        .HasForeignKey("TourPackagepackage_id");

                    b.Navigation("TourPackage");
                });

            modelBuilder.Entity("Traveller_Agents.Models.TourPackages", b =>
                {
                    b.Navigation("spot");
                });
#pragma warning restore 612, 618
        }
    }
}
