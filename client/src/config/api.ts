import supabase from "./supabaseClient";

// GET Public Image URL
export const getImageUrl = async (bucket:string, filePath:string): Promise<string|undefined> => {
    const {data} = await supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)
    
      return data.publicUrl;
};