export async function createBoxd(doc = {}) {
  try {
    const newBoxd = new Boxd(doc);
    const savedBoxd = await newBoxd.save();
    console.log("New boxd saved", savedBoxd);
  } catch (err) {
    console.error("Error saving new boxd", err);
  }
}
