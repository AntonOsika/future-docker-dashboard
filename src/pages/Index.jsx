import { Container, VStack, Box, Text, Link, Flex, Heading, Badge, useColorMode, IconButton, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    },    {
      name: "Container 3",
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
      <Flex>
        <Button onClick={onOpen} mr={4}>Account Info</Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Account Information</DrawerHeader>
            <DrawerBody>
              <Text>Name: John Doe</Text>
              <Text>Email: john.doe@example.com</Text>
              <Text>Role: Admin</Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <TableContainer flex="1">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Parameters</Th>
                <Th>Logs</Th>
                <Th>Running Instances</Th>
                <Th>Scaler State</Th>
              </Tr>
            </Thead>
            <Tbody>
              {containers.map((container, index) => (
                <Tr key={index}>
                  <Td>{container.name}</Td>
                  <Td>{container.params}</Td>
                  <Td><Link color="teal.500" href={container.logs}>View Logs</Link></Td>
                  <Td>{container.runningInstances}</Td>
                  <Td><Badge colorScheme={container.scalerState === "Active" ? "green" : "red"}>{container.scalerState}</Badge></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Container>
  );
};

export default Index;