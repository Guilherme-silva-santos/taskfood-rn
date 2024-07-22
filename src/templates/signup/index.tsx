import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { BaseLoginContainer } from '../baseLoginContainer';
import { Input } from '@/src/components/input';
import { PasswordInput } from '@/src/components/passWordInput';
import { LinkButton } from '@/src/components/linkButton';
import { Button } from '@/src/components/button';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
    const router = useRouter();

    const handleSignIn = () => {
        router.back();
    };
    const handleLogin = () => {
        router.replace("/(tabs)/"); 
    };

    return (
        <BaseLoginContainer text="Hora de criar sua conta!!" title="Login" >
            <KeyboardAvoidingView style={styles.container}>
                <Input
                    placeholder="Digite aqui..."
                    label="E-mail *"
                />
                <Input
                    placeholder="Digite aqui..."
                    label="Nome *"
                />
                 <PasswordInput
                        placeholder="Digite aqui..."
                        label="Senha *"
                />
                <Button
                    text="Criar conta"
                    onPress={handleLogin}
                />
                <Button 
                    text="Voltar para login" 
                    variant="secondary"
                    onPress={handleSignIn}
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
