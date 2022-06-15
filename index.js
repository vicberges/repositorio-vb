function Funcion()
{
document.writeln("<script>");
document.writeln("    let arrayProducto =[]");
document.writeln("    let Total = 0");
document.writeln("    function sumaProductos(Valoritem, Producto) {");
document.writeln("        arrayProducto.push(Producto)");
document.writeln("      Total = Total + Valoritem");
document.writeln("      document.getElementById(\"elTotal\").innerHTML = \"TOTAL: \" + \"$\" + Total; ");
document.writeln("      console.log(arrayProducto);");
document.writeln("      document.getElementById(\"valorProducto\").value = Total");
document.writeln("      document.getElementById(\"listaProductos\").value=arrayProducto");
document.writeln("      return Total}");
document.writeln("    function Limpiar() {");
document.writeln("      Total=0");
document.writeln("      document.getElementById(\"elTotal\").innerHTML = \"TOTAL: \" + \"$\" + 0; }");
document.writeln("</script>");
}
//-->