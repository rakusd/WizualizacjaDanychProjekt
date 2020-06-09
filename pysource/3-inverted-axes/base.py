# %%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

total_hours = 6944
y = np.concatenate(([1], np.arange(10, 210, step = 10)))
x = np.round(total_hours / y).astype(int)
x = x.astype(str)

# %%
sns.set_style('whitegrid')
plt.figure(1, figsize=(12, 8))
plt.bar(x, y)
plt.grid(False, axis = 'x')

major_ticks = np.arange(0, 250, 50)
plt.yticks(major_ticks)

for xx, yy in zip(x, y):
    offset = -5.5 if xx != '6944' else 1
    plt.text(xx, yy + offset, str(yy), color='black', ha="center")

plt.title('Handcrafting 20 000 000 Green Chips')
plt.xlabel('Time [hours]')
plt.ylabel('Number of crafters')

plt.savefig('base.png', dpi = 150,
            bbox_inches = 'tight',
            transparent = True)

# %%
