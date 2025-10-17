#!/usr/bin/env bash
# File: dotaislash-examples/validate-all.sh
# What: Validate all example .ai/ folders
# Why: Ensure all examples are valid and up to spec
# Related: examples/*

set -e

echo "🔍 Validating VERSA Examples"
echo "=============================="
echo ""

VERSA_CLI="/var/www/dotAIslash/dotaislash-cli/dist/bin.js"
EXAMPLES_DIR="/var/www/dotAIslash/dotaislash-examples/examples"

if [ ! -f "$VERSA_CLI" ]; then
  echo "❌ Error: VERSA CLI not found at $VERSA_CLI"
  echo "Run: cd /var/www/dotAIslash/dotaislash-cli && bun run build"
  exit 1
fi

TOTAL=0
PASSED=0
FAILED=0

for example_dir in "$EXAMPLES_DIR"/*; do
  if [ ! -d "$example_dir" ]; then
    continue
  fi
  
  example_name=$(basename "$example_dir")
  TOTAL=$((TOTAL + 1))
  
  echo -n "Validating $example_name... "
  
  if [ ! -d "$example_dir/.ai" ]; then
    echo "❌ FAILED (no .ai/ folder)"
    FAILED=$((FAILED + 1))
    continue
  fi
  
  if bun "$VERSA_CLI" lint "$example_dir" > /dev/null 2>&1; then
    echo "✅ PASSED"
    PASSED=$((PASSED + 1))
  else
    echo "❌ FAILED"
    FAILED=$((FAILED + 1))
    bun "$VERSA_CLI" lint "$example_dir" 2>&1 | sed 's/^/  /'
  fi
done

echo ""
echo "=============================="
echo "Results: $PASSED/$TOTAL passed"

if [ $FAILED -eq 0 ]; then
  echo "✅ All examples validated successfully!"
  exit 0
else
  echo "❌ $FAILED example(s) failed validation"
  exit 1
fi
