﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Requests.Context;

#nullable disable

namespace Requests.Migrations
{
    [DbContext(typeof(AdminContext))]
    partial class AdminContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Requests.Models.Admin", b =>
                {
                    b.Property<int>("admin_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("admin_id"));

                    b.Property<string>("admin_name")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("admin_password")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("admin_id");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("Requests.Models.ImageGallery", b =>
                {
                    b.Property<int>("tour_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("tour_id"));

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("location_image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tour_name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("tour_id");

                    b.ToTable("ImageGallery");
                });

            modelBuilder.Entity("Requests.Models.TravelAgents", b =>
                {
                    b.Property<int>("agent_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("agent_id"));

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("agent_email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("agent_image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("agent_name")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("agent_password")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<long?>("agent_phonenumber")
                        .HasColumnType("bigint");

                    b.HasKey("agent_id");

                    b.ToTable("TravelAgents");
                });
#pragma warning restore 612, 618
        }
    }
}
