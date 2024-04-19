<template>
    <h2>Inscription</h2>
    <Form @submit="ajouterPersonne" :validation-schema="schema" v-slot="{meta, errors}" @invalid-submit="afficherErreur">
      <ul>
        <li v-for="(v, k) in errors">
          {{ k }}: {{ v }}
        </li>
      </ul>
      <div>
        <label for="nom">Nom</label>
        <Field id="nom" name="nom"/>
        <ErrorMessage name="nom"/>
      </div>
      <div>
        <label for="prenom">Prénom</label>
        <Field id="prenom" name="prenom"/>
        <ErrorMessage name="prenom"/>
      </div>
      <div>
        <label for="age">Âge</label>
        <Field id="age" name="age"/>
        <ErrorMessage name="age"/>
      </div>
      <div>
        <label for="mdp">Mot de passe</label>
        <Field id="mdp" name="mdp"/>
        <ErrorMessage name="mdp"/>
      </div>
      <div>
        <button :disabled="!meta.valid">Ajouter</button>
      </div>
    </Form>
  </template>
  <script>
  import {Field, Form, ErrorMessage} from "vee-validate";
  import * as yup from 'yup'
  import axios from "axios";  
  import {useRouter} from "vue-router";

  
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
      ajouterPersonne(values, actions) {
        axios
            .post(`http://localhost:5555/users`, values)
            .then(res => this.$emit('sendData', res.data))
            .then(() => this.$router.push('/'))
            
        
      },
      afficherErreur({errors}) {
        console.log(errors)
      }
    },
    emits: ['sendData']
  }
  </script>
  <style scoped></style>