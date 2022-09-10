export const TEST_ID = 'data-testid';

export function generateTestIdWithPrefix({
  id,
  prefix,
}: {
  id: string;
  prefix?: string;
}) {
  if (!prefix) return id;
  if (!id) return prefix;
  if (id.includes('ngx')) return id;
  return [prefix, id].join('-');
}
