import { Container, Text, VStack, Heading, Button, List, ListItem } from "@chakra-ui/react";
import { usePosts, useAddPost } from "../integrations/supabase/index.js";
import { useState } from "react";

const Index = () => {
  const { data: posts, isLoading, isError } = usePosts();
  const addPostMutation = useAddPost();
  const [newPost, setNewPost] = useState({ name: "", body: "" });

  const handleAddPost = () => {
    addPostMutation.mutate(newPost);
    setNewPost({ name: "", body: "" });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your One-Page Web App</Heading>
        <Text fontSize="lg">This is a default template using Chakra UI.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
        <Heading as="h2" size="lg">Posts</Heading>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text>Error loading posts</Text>
        ) : (
          <List spacing={3}>
            {posts.map((post) => (
              <ListItem key={post.id}>
                <Text fontWeight="bold">{post.name}</Text>
                <Text>{post.body}</Text>
              </ListItem>
            ))}
          </List>
        )}
        <Heading as="h3" size="md">Add a new post</Heading>
        <input
          type="text"
          placeholder="Name"
          value={newPost.name}
          onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <Button onClick={handleAddPost} colorScheme="teal" size="md">Add Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;