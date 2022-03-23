

export const getGif = async( category ) => {
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=zlOx35csquHabMzFcd4lvsqsyGG1FnJc`;
   const result = await fetch( url );
   const { data } = await result.json();
   
   const gif = data.map( img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url
      }
   });
   
   return gif;
}