export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const url = params.get("url");
  console.log("Response", url);
  if (!url) {
    return Response.json({
      status: 400,
      message: "URL is required",
    });
  }
  const startTime = new Date().getTime();
  const response = await fetch(url);
	console.log("Response", response);
	const blob = await response.blob();
	console.log("Response", blob);
  const endTime = new Date().getTime();
  const speed = (endTime - startTime) / 1000;
  console.log(`Your model got downloaded in ${speed}s`);
  return Response.json({
    status: 200,
    speed: `Your model got downloaded in ${speed}s`,
  });
}

// https://r3f-shopify-experience.vercel.app/models/final1.glb
// https://d2btao7ncfyde3.cloudfront.net/Assets/final1.glb
