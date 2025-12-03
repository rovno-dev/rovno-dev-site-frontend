import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Text } from "@/components/Typography/Text"
import { colorStyles } from "@/utils/styles/colors";
import RovnoLogotypeIcon from "./RovnoLogotype/LogotypeIcon";
import Link from "next/link";

export default function BottomAppBar() {
  return (
    <Box
      position={'fixed'}
      bottom={0}
      left={0}
      paddingBottom={'30px'}
      justifyContent={'center'}
      width={'100%'}
      sx={{
        background: `linear-gradient(0deg, ${colorStyles.dark.background.globe.default} 0%, ${colorStyles.dark.background.globe.default} 100%)`,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          direction={'row'}
          aria-label="Bottom app bar"
          sx={{
            border: `1px solid ${colorStyles.dark.background.border.default}`,
            borderRadius: 1000,
            background: colorStyles.dark.background.globe.default,
          }}
        >
          <Stack
            direction={'row'}
            paddingBlock={'30px'}
            paddingLeft={'32px'}
            paddingRight={'60px'}
          >
            <Link href={"/"}>
              <Text>
                Test
              </Text>
            </Link>
            <Typography variant="body1" color="initial">
              test
            </Typography>
            <Typography variant="body1" color="initial">
              test
            </Typography>
            <Typography variant="body1" color="initial">
              test
            </Typography>
          </Stack>
          <Button
            startIcon={<RovnoLogotypeIcon width={24} />}
            variant="contained"
            sx={{
              borderRadius: "0 1000px 1000px 0",
              paddingInline: '30px',
              height: "100%",
            }}
          >
            Оформить заказ
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
