import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { BaseLoginContainer } from '../baseLoginContainer';
import { Input } from '@/src/components/input';
import { PasswordInput } from '@/src/components/passWordInput';
import { LinkButton } from '@/src/components/linkButton';
import { Button } from '@/src/components/button';
import { router } from 'expo-router';

export default function SigninScreen() {

    const handleForgotPassword = () => {
        router.navigate("/forgot-password");
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
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                />
                <LinkButton
                    text="Esqueci minha senha"
                    onPress={handleForgotPassword}
                    style={{ alignSelf: "flex-end" }}
                />
                <Button
                    text="Entrar"
                    onPress={handleSubmit(onSubmit)}
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
