/* eslint-disable */
export const createParagraphNode = (children: any) => ({
  type: 'paragraph' as const,
  children,
});
