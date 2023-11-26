import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";

async function handler(req: Request) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 128,
        background: "lavender",
      }}
    >
      Hello!
    </div>,
  );
}

serve(handler);