import { AdminPostPriceListsPriceListPriceListReq } from "@/backend/dist"
import { PriceOverridesFormValues } from "../../../../../../components/templates/price-overrides"
import xorObjFields from "../../../../../../utils/xorObjFields"

export const mapToPriceList = (
  values: PriceOverridesFormValues,
  variantId: string
) => {
  return values.prices
    .map((price) => ({
      id: price.id,
      ...xorObjFields(price, "currency_code", "region_id"),
      amount: price.amount,
      min_quantity: price.min_quantity,
      max_quantity: price.max_quantity,
      variant_id: variantId,
    }))
    .filter(
      (pr) => pr.amount > 0
    ) as AdminPostPriceListsPriceListPriceListReq["prices"]
}
