import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { BaseLoginContainer } from '../baseLoginContainer';
import { Input } from '@/src/components/input';
import { PasswordInput } from '@/src/components/passWordInput';
import { LinkButton } from '@/src/components/linkButton';
import { Button } from '@/src/components/button';
import { useRouter } from 'expo-router';

export default function SigninScreen() {
    const router = useRouter();

    const handleSignUp = () => {
        router.navigate("/signup");
    };

    const handleForgotPassword = () => {
        router.push("/forgot-password");
    };

    const handleSignIn = () => {
        router.replace("/(tabs)/"); 
    };

    return (
        <BaseLoginContainer text="Seja bem-vindo" title="Login" >
            <KeyboardAvoidingView style={styles.container}>
                <Input
                    placeholder="Digite aqui..."
                    label="E-mail *"
                />
                <PasswordInput
                    placeholder="Digite aqui..."
                    label="Senha *"
                />
                <LinkButton
                    text="Esqueci minha senha"
                    onPress={handleForgotPassword}
                    style={{ alignSelf: "flex-end" }}
                />
                <Button
                    text="Entrar"
                    onPress={handleSignIn}
                />
                <Button 
                    text="Criar conta" 
                    variant="secondary"
                    onPress={handleSignUp}
                />
            </KeyboardAvoidingView>
        </BaseLoginContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 16,
    },
});
