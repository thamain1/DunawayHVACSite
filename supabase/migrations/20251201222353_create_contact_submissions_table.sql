/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `email` (text) - Customer's email address
      - `address` (text, nullable) - Service address if provided
      - `contact_method` (text) - Preferred contact method (phone, email, either)
      - `service_type` (text) - Type of service requested
      - `message` (text, nullable) - Additional message from customer
      - `sms_consent` (boolean) - Whether customer opted in for SMS
      - `created_at` (timestamp) - When the submission was created
      - `status` (text) - Status of the submission (new, contacted, completed)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to insert submissions
    - Add policy for service role to read all submissions (for edge function)
    
  3. Indexes
    - Create index on created_at for faster queries by date
    - Create index on status for filtering by status
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  address text,
  contact_method text NOT NULL DEFAULT 'phone',
  service_type text NOT NULL DEFAULT 'other',
  message text,
  sms_consent boolean DEFAULT false,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);