// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContet = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContet?.length).toBeGreaterThan(0)
  await expect(imageSrc?.length).toBeGreaterThan(0)
})
