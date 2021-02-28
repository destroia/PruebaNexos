using Microsoft.EntityFrameworkCore.Migrations;

namespace PruebaNexos.Data.Migrations
{
    public partial class _2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EditorialID",
                table: "Libros",
                newName: "EditorialId");

            migrationBuilder.AddColumn<int>(
                name: "NumLibros",
                table: "Editoriales",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Libros_EditorialId",
                table: "Libros",
                column: "EditorialId");

            migrationBuilder.AddForeignKey(
                name: "FK_Libros_Editoriales_EditorialId",
                table: "Libros",
                column: "EditorialId",
                principalTable: "Editoriales",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Libros_Editoriales_EditorialId",
                table: "Libros");

            migrationBuilder.DropIndex(
                name: "IX_Libros_EditorialId",
                table: "Libros");

            migrationBuilder.DropColumn(
                name: "NumLibros",
                table: "Editoriales");

            migrationBuilder.RenameColumn(
                name: "EditorialId",
                table: "Libros",
                newName: "EditorialID");
        }
    }
}
