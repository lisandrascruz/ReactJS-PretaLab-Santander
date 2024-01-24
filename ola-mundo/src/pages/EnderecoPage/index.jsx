import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const EnderecoPage = () => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("Rua da Amora");
  const [cidade, setCidade] = useState("Canjiquinha");
  const [estado, setEstado] = useState("Pamonha");
  const [latitude, setLatitude] = useState("-12423");
  const [longitude, setLongitude] = useState("1231232312");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt={2}
      gap={3}
      width="100vw"
    >
      <Stack alignItems="center" gap={1}>
        <Typography variant="h4">Consulte seu CEP</Typography>
        <Link
          target="_blank"
          href="https://brasilapi.com.br/"
          underline="always"
        >
          via Brasil API
        </Link>
      </Stack>

      <Stack alignItems="center" gap={1} direction="row">
        <TextField
          placeholder="50012007"
          required
          inputProps={{ maxLength: 8 }}
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />
        <Button variant="contained">Buscar</Button>
      </Stack>

      <Stack width="70vh" gap={2} mb={4}>
        <TextField label="Rua" fullWidth readOnly value={rua} />
        <TextField label="Cidade" fullWidth readOnly value={cidade} />
        <TextField label="Estado" fullWidth readOnly value={estado} />
        <TextField label="Latitude" fullWidth readOnly value={latitude} />
        <TextField label="Longitude" fullWidth readOnly value={longitude} />
      </Stack>
    </Box>
  );
};

export default EnderecoPage;
