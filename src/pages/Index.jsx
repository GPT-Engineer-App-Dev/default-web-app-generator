import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your One-Page Web App</Heading>
        <Text fontSize="lg">This is a default template using Chakra UI.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;