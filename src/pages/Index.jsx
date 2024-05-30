import { Container, VStack, Box, Text, Link, Flex, Heading, Badge, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [containers, setContainers] = useState([
    {
      name: "Container 1",
      params: "param1=value1 param2=value2",
      logs: "#",
      runningInstances: 3,
      scalerState: "Active",
    },
    {
      name: "Container 2",
      params: "param1=value1 param2=value2",
      logs: "#",
      runningInstances: 1,
      scalerState: "Idle",
    },
  ]);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg">Futuristic Dashboard</Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>
      <VStack spacing={4} align="stretch">
        {containers.map((container, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">{container.name}</Heading>
            <Text mt={4}><strong>Parameters:</strong> {container.params}</Text>
            <Text mt={2}><strong>Running Instances:</strong> {container.runningInstances}</Text>
            <Text mt={2}><strong>Scaler State:</strong> <Badge colorScheme={container.scalerState === "Active" ? "green" : "red"}>{container.scalerState}</Badge></Text>
            <Link mt={2} color="teal.500" href={container.logs}>View Logs</Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;