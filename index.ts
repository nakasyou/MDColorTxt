import { Hono } from "https://deno.land/x/hono@v3.1.2/mod.ts";
import { serve } from "https://deno.land/std@0.181.0/http/server.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.1.2/middleware.ts";
import svg from "./svg.ts";

const app=new Hono();
app.get('/i/:str',ctx=>{
  const str=ctx.req.param("str");
  const color=ctx.req.query("c") || "currentColor";
  const size=(()=>{
    try{
      return parseFloat(ctx.req.query("size") || "40px");
    }catch{
      return 10;
    }
  })();
  const family=ctx.req.query("family") || "sans-serif";
  
  ctx.header('Content-Type', 'image/svg+xml');
  
  return ctx.body(svg({
    str,
    color,
    size,
    family,
  }));
});
app.get('/',serveStatic({ path: "./public/index.html" }))
app.use('/*',serveStatic({ root: "./public" }))
serve(app.fetch,{
  port: 8000,
});