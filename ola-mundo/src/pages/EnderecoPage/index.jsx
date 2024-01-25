import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";

const EnderecoPage = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    rua: "",
    cidade: "",
    estado: "",
    latitude: "",
    longitude: "",
  });

  const consultarCEP = async () => {
    try {
      const resposta = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${cep}`
      );

      const enderecoResposta = resposta.data;

      setEndereco({
        rua: enderecoResposta.street,
        cidade: enderecoResposta.city,
        estado: enderecoResposta.state,
        latitude: enderecoResposta.location.coordinates.latitude,
        longitude: enderecoResposta.location.coordinates.longitude,
      });
    } catch (erro) {
      console.erro("Um erro aconteceu ao buscar o CEP");
    }
  };

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
        <Button variant="contained" onClick={() => consultarCEP()}>
          Buscar
        </Button>
      </Stack>

      <Stack width="70vh" gap={2} mb={4}>
        <TextField label="Rua" fullWidth readOnly value={endereco.rua} />
        <TextField label="Cidade" fullWidth readOnly value={endereco.cidade} />
        <TextField label="Estado" fullWidth readOnly value={endereco.estado} />
        <TextField
          label="Latitude"
          fullWidth
          readOnly
          value={endereco.latitude}
        />
        <TextField
          label="Longitude"
          fullWidth
          readOnly
          value={endereco.longitude}
        />
      </Stack>
    </Box>
  );
};

export default EnderecoPage;
