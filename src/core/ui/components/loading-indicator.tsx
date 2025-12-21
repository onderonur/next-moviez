import { Box, CircularProgress } from '@mui/material';

type LoadingIndicatorProps = {
  ref?: React.Ref<HTMLDivElement>;
  loading: boolean;
  children?: React.ReactNode;
};

export function LoadingIndicator({
  ref,
  loading,
  children,
}: LoadingIndicatorProps) {
  if (!loading) return children;

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginY: 2,
        flexGrow: 1,
      }}
    >
      <CircularProgress aria-label="Loading..." size={48} color="secondary" />
    </Box>
  );
}
