import BlankLayout from '@/components/blankLayout';
import { Box, Card, CardContent } from '@mui/material';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  //  have a logic here if the user is authentiated or not
  return (
    <BlankLayout>
      <Box sx={{ maxWidth: '35%', margin: 'auto', marginBottom: 10, marginTop: 10 }}>
        <Card sx={{ zIndex: 1 }}>
          <CardContent>{children}</CardContent>
        </Card>
      </Box>
    </BlankLayout>
  );
}
