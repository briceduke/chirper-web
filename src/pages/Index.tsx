import { Box, Button, Divider, Flex, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export const IndexPage = () => {
	return (
		<Stack direction={["column", "column", "column", "row"]} h={"100vh"}>
			<Box w={"50%"}>
				<Image src="/img/index-banner.png" objectFit="cover" h={"full"} />
			</Box>
			<Box w={"50%"} display={"flex"} alignItems={"center"}>
				<Box>
					<Heading as="h1" size={"3xl"}>
						Chirp Chirp
					</Heading>
					<VStack>
						<Heading>Join Chirper</Heading>
						<Button leftIcon={<FaGoogle />} w={250}>
							Sign up with Google
						</Button>
						<Button leftIcon={<FaGithub />} w={250}>
							Sign up with GitHub
						</Button>
						<Flex align={"center"}>
							<Divider orientation="horizontal" />
							<Text padding={"2"}>or</Text>
							<Divider />
						</Flex>
						<Button colorScheme={"cyan"} w={250}>
							Sign up with phone or email
						</Button>
					</VStack>
				</Box>
			</Box>
		</Stack>
	);
};
