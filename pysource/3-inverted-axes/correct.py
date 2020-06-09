# %%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

total_hours = 6944

def f(x):
    return 6944 / x

x = np.linspace(1, 201, 199)
y = f(x)

x_special = np.concatenate(([1], np.arange(10, 210, step = 10)))
y_special = np.round(f(x_special))

# %%
sns.set_style('whitegrid')
plt.figure(1, figsize=(12, 8))
sns.lineplot(x, y)
# plt.grid(False, axis = 'x')

sns.scatterplot(x_special, y_special)
for xx, yy in zip(x_special, y_special):
    plt.annotate('%d'%(yy),
                (xx, yy), xytext=(0, 5), 
                textcoords='offset points', ha='center')

ax = plt.gca()
minor_ticks = np.arange(0, 210, 10)
ax.set_xticks(minor_ticks)

# for xx, yy in zip(x, y):
#     offset = -5.5 if xx != '6944' else 1
#     plt.text(xx, yy + offset, str(yy), color='black', ha="center")

plt.title('Handcrafting 20 000 000 Green Chips')
plt.xlabel('Number of crafters')
plt.ylabel('Time [hours]')

plt.savefig('correct.png', dpi = 150,
            bbox_inches = 'tight')
# %%
