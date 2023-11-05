import TmdbAvatar from '@/tmdb/tmdb-avatar';
import NextLink from '@/routing/next-link';
import { CardHeader, Typography } from '@mui/material';
import { lineClamp } from '@/theme/theme-utils';

export type MediaCardHeaderProps = {
  title: string;
  subheader: string;
  href: string;
  imageSrc: string;
};

// TODO: Rename
export default function MediaCardHeader({
  title,
  subheader,
  href,
  imageSrc,
}: MediaCardHeaderProps) {
  return (
    <CardHeader
      avatar={
        <NextLink href={href}>
          <TmdbAvatar src={imageSrc} alt={title} />
        </NextLink>
      }
      title={
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            fontWeight: 'bold',
            ...lineClamp(2),
          }}
        >
          {title}
        </Typography>
      }
      subheader={
        <NextLink
          href={href}
          sx={{
            fontSize: { xs: '0.875rem', md: '1rem' },
            fontWeight: 'medium',
          }}
        >
          {subheader}
        </NextLink>
      }
      disableTypography
    />
  );
}
