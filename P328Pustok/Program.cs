using Microsoft.EntityFrameworkCore;
using P328Pustok.DAL;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<PustokContext>(opt =>
{
    opt.UseSqlServer("Server=LAPTOP-DMGD9EDH\\SQLEXPRESS;Database=PustokV2-Home;Trusted_Connection=True");
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
