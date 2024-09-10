import React, { ReactNode, forwardRef } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CustomViewProps {
  children: ReactNode;
}

// Use forwardRef to pass the ref to the ScrollView
const CustomView = forwardRef<ScrollView, CustomViewProps>(({ children }, ref) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        ref={ref}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: Dimensions.get("window").height * 0.02,
  },
});

export default CustomView;
