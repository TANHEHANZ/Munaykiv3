// import React, { useState } from "react";
// import { Pressable, View } from "react-native";
// import { informacion } from "../../infraestructure/constants/preview.constanst";
// import { useAnimations } from "../../components/hooks/useAnimations";
// import Logo from "../../components/ui/logo";
// import Animated from "react-native-reanimated";
// import TextContent from "../../components/ui/textContent";
// import ActionButtons from "../../components/ui/buttons/action";
// import ButtonPrimary from "../../components/ui/buttons/primary";

// export default function PreView() {
//   const [index, setIndex] = useState(0);
//   const [showButton, setShowButton] = useState(true);
//   const { fadeInOut, animatedStyle, scaleAnimation } = useAnimations();

//   const moveWindow = () => {
//     fadeInOut(() => {
//       if (index < informacion.length - 1) {
//         setIndex((prev) => prev + 1);
//       } else {
//         setShowButton(false);
//       }
//     });
//   };

//   const moveBackWindow = () => {
//     fadeInOut(() => {
//       if (index > 0) {
//         setIndex((prev) => prev - 1);
//       }
//     });
//   };

//   const redirect = () => {
//     console.log("redireccionando");
//   };

//   return (
//     <View className="flex justify-center relative h-full items-center w-[80%] mx-auto">
//       <Logo />
//       <Animated.View
//         style={scaleAnimation}
//         className="w-24 h-24 rounded-full bg-violet-700 mb-8"
//       />

//       {showButton && (
//         <TextContent
//           animatedStyle={animatedStyle}
//           title={informacion[index].title}
//           text={informacion[index].text}
//         />
//       )}

//       <View className="flex justify-center flex-col py-4 h-1/2 absolute bottom-0 w-full">
//         {showButton ? (
//           <ActionButtons
//             index={index}
//             informacion={informacion}
//             moveWindow={moveWindow}
//             moveBackWindow={moveBackWindow}
//           />
//         ) : (
//           <View className="flex flex-col w-full h-1/2 justify-center ">
//             <ButtonPrimary
//               icon="google"
//               iconType="AntDesign"
//               onPress={redirect}
//               title="Continuar con Google"
//               propclass="flex-row gap-x-2"
//             />
//             <ButtonPrimary
//               icon="google"
//               iconType="AntDesign"
//               onPress={redirect}
//               title="Continuar con Google"
//               propclass="flex-row gap-x-2"
//             />
//           </View>
//         )}
//       </View>
//     </View>
//   );
// }
