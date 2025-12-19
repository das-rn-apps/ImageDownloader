const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const downloadImage = async (url: string, filename: string) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Download failed ${res.status}`);
  const blob = await res.blob();
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(href);
  a.remove();
};

export const downloadSequential = async (
  urls: string[],
  query: string,
  onProgress?: (completed: number, total: number) => void,
  onItemStart?: (index: number) => void,
  onItemResult?: (index: number, ok: boolean) => void
) => {
  let success = 0;
  let failed = 0;
  const failedIndices: number[] = [];
  for (let i = 0; i < urls.length; i++) {
    onItemStart?.(i);
    try {
      const filename = `${query}_${i + 1}.jpg`;
      await downloadImage(urls[i], filename);
      success++;
      onItemResult?.(i, true);
    } catch {
      failed++;
      failedIndices.push(i);
      onItemResult?.(i, false);
    }
    onProgress?.(i + 1, urls.length);
    await sleep(50);
  }
  return { success, failed, failedIndices };
};
