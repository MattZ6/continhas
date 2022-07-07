import { memo } from 'react';

import { TagsStyles as Styles } from './styles';

type Tag = {
  id: string;
  title: string;
  color_hex: string;
};

type TagProps = {
  tag: Tag;
};

const Tag = memo(({ tag }: TagProps) => {
  return (
    <Styles.Tag style={{ color: tag.color_hex, borderColor: tag.color_hex }}>
      <Styles.TagDot style={{ backgroundColor: tag.color_hex }} />
      {tag.title}
    </Styles.Tag>
  );
});

type Props = {
  tags: Tag[];
};

export function Tags({ tags }: Props) {
  return (
    <Styles.Container>
      {tags.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </Styles.Container>
  );
}
