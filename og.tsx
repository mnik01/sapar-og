import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";

async function handler(req: Request) {
  const url = new URL(req.url);
  const heading = url.searchParams.get("heading") || "Default Heading";
  const tag = url.searchParams.get("tag") || "Default Tag";
  const author = url.searchParams.get("author") || "Default Author";
  //     backgroundImage: "url(https://i.postimg.cc/0NvHqM4m/image.png)",

  return new ImageResponse(
<div
  tw="flex relative py-16 px-8 text-white flex-col w-full h-full items-start justify-between bg-white"
>
  <div style={{
      backgroundImage: "url(https://i.postimg.cc/nzq3SvZN/image.png)",
      transform: "scale(2)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "blur(2px)",
    }} tw="absolute w-full h-full top-0 left-0"></div>
  <div style={{
    transform: "scale(2)",
    }} tw="absolute w-full h-full bg-[#000]/75 top-0 left-0"></div>
    <div style={{
      letterSpacing: "2px",
      fontFamily: "sans-serif"
    }} tw="uppercase text-2xl text-[#FED70D] font-bold">{tag}</div>
  <div tw="flex flex-col items-start">
    <div style={{
      letterSpacing: "3px",
    }} tw="text-5xl font-bold">
      {heading}
    </div>
    <div style={{
      letterSpacing: "2px",
      fontFamily: "sans-serif"
    }} tw="text-2xl mt-5 font-serif">
      {author}
    </div>
  </div>
</div>
  );
}

serve(handler, { port: 8080 });
