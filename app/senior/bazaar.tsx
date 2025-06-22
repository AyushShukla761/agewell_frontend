"use client"

import { Alert, SafeAreaView, ScrollView } from "react-native"
import { ActionButtons } from "../../components/bazaar/ActionButtons"
import { BazaarFooter } from "../../components/bazaar/BazaarFooter"
import { BazaarHeader } from "../../components/bazaar/BazaarHeader"
import { ProductGrid } from "../../components/bazaar/ProductGrid"

export default function BazaarPage() {
  const handleEmergency = async () => {
    Alert.alert("Emergency", "Sending emergency alert...")
  }

  const handleStartSelling = () => {
    Alert.alert("Start Selling", "Create your seller account and list products")
  }

  const handleExploreProducts = () => {
    Alert.alert("Explore Products", "Browse all available products")
  }

  const handleBuyNow = (productName: string, price: string) => {
    Alert.alert("Buy Now", `Adding ${productName} (${price}) to cart`)
  }

  const handleProductPress = (productName: string) => {
    Alert.alert("Product Details", `Opening details for: ${productName}`)
  }

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f3f4f6" }}>

      <ScrollView className="flex-1" style={{ backgroundColor: "#f3f4f6" }} showsVerticalScrollIndicator={false}>
        <BazaarHeader />

        <ActionButtons onStartSelling={handleStartSelling} onExploreProducts={handleExploreProducts} />

        <ProductGrid onBuyNow={handleBuyNow} onProductPress={handleProductPress} />

        <BazaarFooter />
      </ScrollView>
    </SafeAreaView>
  )
}
