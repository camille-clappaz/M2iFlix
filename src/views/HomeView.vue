<template>
    <h2>Connexion</h2>
    <Form @submit="connexion" v-slot="{ meta }">
        <div>
            <label for="nom">Nom</label>
            <Field id="nom" name="nom" />
            <ErrorMessage name="nom" />
        </div>
        <div>
            <label for="mdp">Mot de passe</label>
            <Field id="mdp" name="mdp" />
            <ErrorMessage name="mdp" />
        </div>
        <div>
            <button :disabled="!meta.valid">Connexion</button>
        </div>
    </Form>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from 'yup'
import axios from "axios";
import { useRouter } from "vue-router";


export default {

    components: {
        Field, Form, ErrorMessage
    },
    data() {
        const validateString = () => yup
            .string()
            .required()
            .matches(/^[A-Z]{1}.*/, (params) => `'${params.value}' ne commence pas par une majuscule`)
        return {
            schema: yup.object({
                nom: validateString(),
                age: yup
                    .number().required().min(16).max(120),
                prenom: validateString()
            })

        }
    },
    methods: {
        connexion(values) {
            axios
                .get(`http://localhost:5555/users?nom=${values.nom}&mdp=${values.mdp}`, values)
                .then(res => {
                        if (res.data && res.data.length > 0) {
                            localStorage.setItem('user', res.data[0]);
                            this.$router.push('/films')
                        }
                        else {
                            this.$router.push('/')
                        }
                    }
                
                );
        }
    },
    mounted() {

    },
}
</script>
<style scoped></style>