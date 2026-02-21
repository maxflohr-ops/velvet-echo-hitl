/**
 * Google Sheets integration module
 * Handles authentication and data retrieval from Google Sheets
 */

const SHEET_ID = process.env.SHEET_ID
const SHEET_API_KEY = process.env.SHEET_API_KEY
const SHEET_RANGE = process.env.SHEET_RANGE || 'Sheet1!A1:Z1000'

/**
 * Fetch data from Google Sheets
 * @param {string} range - The range in A1 notation (e.g., 'Sheet1!A1:Z100')
 * @returns {Promise<Array>} Array of rows from the sheet
 */
export async function getSheetData(range = SHEET_RANGE) {
  if (!SHEET_ID || !SHEET_API_KEY) {
    throw new Error('Missing SHEET_ID or SHEET_API_KEY environment variables')
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${SHEET_API_KEY}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Sheets API error: ${response.status}`)
    }

    const data = await response.json()
    return data.values || []
  } catch (error) {
    console.error('Error fetching sheet data:', error)
    throw error
  }
}

/**
 * Append data to Google Sheets
 * @param {Array} values - Array of values to append
 * @param {string} range - The range in A1 notation
 * @returns {Promise<Object>} Response from Sheets API
 */
export async function appendSheetData(values, range = SHEET_RANGE) {
  if (!SHEET_ID) {
    throw new Error('Missing SHEET_ID environment variable')
  }

  // Note: For write operations, you'll need OAuth credentials, not just API key
  // This is a placeholder for the actual implementation
  console.warn('appendSheetData requires OAuth setup - not yet implemented')
  return null
}

/**
 * Update a specific cell in Google Sheets
 * @param {string} cell - Cell reference (e.g., 'A1')
 * @param {string} value - Value to set
 * @returns {Promise<Object>} Response from Sheets API
 */
export async function updateSheetCell(cell, value) {
  if (!SHEET_ID) {
    throw new Error('Missing SHEET_ID environment variable')
  }

  // Note: For write operations, you'll need OAuth credentials
  console.warn('updateSheetCell requires OAuth setup - not yet implemented')
  return null
}

export default {
  getSheetData,
  appendSheetData,
  updateSheetCell,
}
