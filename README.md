## **FORMAÇÃO REACT NATIVE DEVELOPER**
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
### **Plataforma DIO: Digital Innovation One**

Repositório para inserção dos estudos e projetos desenvolvidos durante a __FORMAÇÃO REACT NATIVE DEVELOPER__ oferecido pela plataforma [DIO - Digital Innovation One](https://www.dio.me)

__Documentações :__
[React Native](https://reactnative.dev/) |
[Expo](https://docs.expo.dev/) |
[React Navigation](https://reactnavigation.org/) |
[React](https://react.dev/)


## **Tópicos Desenvolvidos no Curso**

### 01_INTRODUÇÃO_REACT_NATIVE

>#### Comando para criação de projetos __React Native__ utilizando __Expo__
>
>```
>npx create-expo-app _nome-do-app_ -t  
>```
>
>OBS: **-t** representa template, e com este comando é possivel selecionar a estrutura de código desejada. Neste curso a opção selecionada foi Blank (Typescript) 
>#### Comandos para acessar o projeto 
>```
> cd nome_do_app   
>```
>```
> npm start  
>```
>___


#### Conceitos abordados
style in-line, StyleSheet, componentes básicos do React Native (Image, StyleSheet, Text, View, TouchableOpacity) e controle de estados (Hook useState)

Para compreensão dos conceitos aprendidos foi desenvolvido em aula o projeto [green-lantern](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/01_REACT_NATIVE_INTRODUCAO/green-lantern). 


### 02_REACT_NATIVE_FUNDAMENTOS

Nesta etapa de fundamentos foram desenvolvidos 3 aplicativos para apresentação do conteúdo:

>App [components-overview: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/02_REACT_NATIVE_FUNDAMENTOS/components-overview) Neste projeto foi apresentado alguns componentes básicos, tais como: __Alert, StyleSheet, Text, View, TextInput, Button, ScrollView, Switch, Image__.

>App [react-native-flexbox: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/02_REACT_NATIVE_FUNDAMENTOS/react-native-flexbox) Neste projeto foi apresentado o conceito de estilização flexbox aplicado ao React Native.

>App [events: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/02_REACT_NATIVE_FUNDAMENTOS/events) Neste projeto foi apresentado uma introdução aos eventos dos componentes __Text__ e __TextInput__. 
>
>Para cada um dos componentes foram estudados os seguintes eventos: 
>>__Text: <u>onPress, onPressIn, onPressOut, onLongPress, onTextLayout</u>__
>
>>__TextInput: <u>onChange, onChangeText, onFocus</u>__
>___

### 03_REACT_NATIVE_NAVEGABILIDADE

Nesta etapa do curso foram apresentados como utilizar diferentes tipos de hooks e diferentes tipos de navegação entre screens. Os conceitos foram detalhados nos apps a seguir:

| __**Hooks**__

>App [hooks-contador: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/03_REACT_NATIVE_NAVEGABILIDADE/hooks-contador) App em forma de um contador com 2 botões com as funções de incrementar e diminuir um número do display. Na mesma tela foram apresentados dois contadores. O primeiro contador utilizando o hook __useState__ e o segundo contador utilizando o hook __useReducer__. Para ambos foi utilizado também o hook __useEffect__.

>App [hooks-tarefas: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/03_REACT_NATIVE_NAVEGABILIDADE/hooks-tarefas) App para adição de tarefas. Para a implemetação do app foram utilizados os hooks __useState__ e o __useReducer__ em conjunto.

| __**Navigation**__

>Comandos para instalação do react-navigation:
>
>```
>npm install @react-navigation/native
>```
>
>
>```
>npx expo install react-native-screens react-native-safe-area-context
>```
>___


>App [navigation-stack: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/03_REACT_NATIVE_NAVEGABILIDADE/navigation-stack) Neste app foi apresentação o tipo de navegação __stack__.
>>Comando de intalação do __stack-navigator__ :
>>```
>>npm install @react-navigation/stack
>>```
>___


>App [navigation-bottom-tabs: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/03_REACT_NATIVE_NAVEGABILIDADE/navigation-bottom-tabs) Neste app foi apresentação o tipo de navegação __bottom-tabs__.
>>Comando de intalação do __bottom-tabs-navigator__ :
>>```
>>npm install @react-navigation/bottom-tabs
>>```
>___

>App [navigation-drawer: ](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/03_REACT_NATIVE_NAVEGABILIDADE/navigation-drawer) Neste app foi apresentação o tipo de navegação __drawer__.
>>Comandos de intalação do __drawer-navigator__ :
>>```
>>npm install @react-navigation/drawer
>>```
>>```
>>npm install react-native-gesture-handler react-native-reanimated
>>```
>___

## **Desafios de Projetos**

__**Sequenciador de senhas**__

O projeto para criação de senhas desenvolvido em aula conforme [Projeto inicial-DIO](https://github.com/felipeAguiarCode/react-native-bat-pass-generator). Como parte do desafio para entrega do projeto, foi implantada uma mensagem informando que a senha foi copiada ao clicar no botão de cópia e ao gerar uma nova senha a mensagem deixa de ser exibida. Também foi implementado como desafio, a opção de escolhar o nível de segurança da senha (fraca, normal ou forte) a ser gerada utilizando a bibloteca "react-native-select-dropdown"

Acessar projeto [<u>**bat-expo-app**</u>](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/PROJETOS/bat-expo-app) 

---


__**Bat Sinal**__

O projeto consiste na criação de duas paginas, uma tela inicial, na qual é apresentada uma imagem e um botão para ativar o sinal, que ao pressionar é direcionado para uma tela de formulário. Clicando no botão enviar na tela de formulário, a aplicação retorna para a tela inicial. O desafio foi desenvolver toda a aplicação do zero.

Acessar projeto [<u>**bat-sinal**</u>](https://github.com/astorti/Formacao-React-Native-Developer-DIO/tree/main/PROJETOS/bat-sinal) 