import { View, Text, ScrollView } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center px-4">
          <Text className="text-4xl font-pblack text-[#EBD9B4] pt-5">
            Biblioteca
          </Text>
          <Text className="text-2xl font-pblack text-[#EBD9B4] my-[-8px]">
            do Vinão
          </Text>
        </View>

        <View className="w-full flex justify-center px-4 my-6">
          <Text className="text-2xl text-white text-semibold mt-5 font-psemibold">
            Faça o Log-in:
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Senha"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-10"
            isLoading={isSubmitting}
          />

          <View className="items-center pt-5 flex gat-2">
            <Text className="text-lg text-white font-pregular">
              Não tem uma conta?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Crie uma aqui!
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
