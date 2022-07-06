import { SkeletonStyles as Styles } from './styles';

type Props = {
  width: number | string;
  height: number | string;
  borderRadius?: number | string;
};

export function Skeleton({ width, height, borderRadius = '$normal' }: Props) {
  return <Styles.Container style={{ width, height, borderRadius }} />;
}
