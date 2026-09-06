export function checkIsAdultContent(mangaData: any): boolean {
    const isAdultRating = ['erotica', 'pornographic'].includes(mangaData.attributes?.contentRating);
    const hasContentWarnings = mangaData.attributes?.tags?.some((tag: any) => tag.attributes?.group === 'content');

    return isAdultRating || hasContentWarnings;
}