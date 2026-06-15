# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: 2.9 s
- **Render duration**: 641.7 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/sort_countries.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/sort_countries_flame.png)


### Interaction B: Search countries

- **Commit duration**: 2 s
- **Render duration**: 341.1 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/search_countries.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/search_countries_flame.png)

### Interaction C: Change year

- **Commit duration**: 1.9 s
- **Render duration**: 58 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/change_year.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/change_year_flame.png)


### Interaction D: Toggle column

- **Commit duration**: 1.9 s
- **Render duration**: 57.3 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/column_modal.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/baseline/change_year_flame.png)

## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: 2 s
- **Render duration**: 128 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/sort_countries_optimized.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/sort_countries_flame_optimized.png)

### Interaction B: Search countries

- **Commit duration**: 1.7 s
- **Render duration**: 70.6 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/search_countries_optimized.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/search_countries_flame_optimized.png)

### Interaction C: Change year

- **Commit duration**: 1.7 s
- **Render duration**: 43.8 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/change_year_optimized.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/change_year_flame_optimized.png)

### Interaction D: Toggle column

- **Commit duration**: 1.1 s
- **Render duration**: 32.4 ms
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/column_modal_optimized.png)
- **Screenshot**: ![screenshot](/performance-starter/screenshots/optimized/column_modal_flame_optimized.png)

## Summary of Improvements

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 641.7         | 128.2          | 80%         |
| Search countries | 341.1         | 70.6           | 79.3%       |
| Change year      | 58            | 43.8           | 24.5%       |
| Toggle column    | 57.3          | 32.4           | 43.5%       |
| **Average**      | **274.5**     | **68.75**      | **74.95%**  |
